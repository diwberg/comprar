import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const STORAGE_KEY = '@comprar:items';

export type ItemStorageProps = {
    id: string;
    status: FilterStatus;
    description: string;
}

export const itemsStorage = {
    async save(items: ItemStorageProps[]): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error('Erro ao salvar itens:', error);
            throw new Error("SAVE_ITEMS_ERROR" + error)
        }
    },
    async add(item: ItemStorageProps): Promise<ItemStorageProps[]> {
        try {
            const items = await this.get();
            await this.save([...items, item]);
            return [...items, item];
        } catch (error) {
            console.error('Erro ao adicionar item:', error);
            throw new Error("ADD_ITEM_ERROR" + error)
        }
    },
    async get(): Promise<ItemStorageProps[]> {
        try {
            const items = await AsyncStorage.getItem(STORAGE_KEY);
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error('Erro ao buscar itens:', error);
            throw new Error("GET_ITEMS_ERROR" + error)
        }
    },
    async getByStatus(status: FilterStatus): Promise<ItemStorageProps[]> {
        try {
            const items = await this.get();
            return items.filter(item => item.status === status);
        } catch (error) {
            console.error('Erro ao buscar itens:', error);
            throw new Error("GET_ITEM_BY_STATUS_ERROR" + error)
        }
    },
    async toggleStatus(id: string): Promise<ItemStorageProps[]> {
        try {
            const items = await this.get();
            const updatedItems = items.map(item => item.id === id ? { ...item, status: item.status === FilterStatus.PENDING ? FilterStatus.DONE : FilterStatus.PENDING } : item);
            await this.save(updatedItems);
            return updatedItems;
        } catch (error) {
            console.error('Erro ao atualizar itens:', error);
            throw new Error("UPDATE_ITEMS_ERROR" + error)
        }
    },
    async remove(id: string): Promise<ItemStorageProps[]> {
        try {
            const items = await this.get();
            const filteredItems = items.filter(item => item.id !== id);
            await this.save(filteredItems);
            return filteredItems;
        } catch (error) {
            console.error('Erro ao remover itens:', error);
            throw new Error("REMOVE_ITEMS_ERROR" + error)
        }
    },
    async clear(): Promise<void> {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error('Erro ao limpar itens:', error);
            throw new Error("CLEAR_ITEMS_ERROR" + error)
        }
    }
}