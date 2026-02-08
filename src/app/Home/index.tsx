import { Image, View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Filter } from '@/components/ui/Filter';
import { Item } from '@/components/ui/Item';

import { itemsStorage, ItemStorageProps } from '@/storage/itemsStorage';

import { styles } from './style';

import { FilterStatus } from '@/types/FilterStatus';
import { useEffect, useState } from 'react';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {

  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<ItemStorageProps[]>([]);

  const handleAddItem = () => {

    if (!description.trim()) {
      return Alert.alert('Atenção', 'Por favor, insira um produto.');
    };

    const newItem = {
      id: Date.now().toString(),
      status: FilterStatus.PENDING,
      description,
    }

    itemsStorage.add(newItem)
      .then((updatedItems) => {
        setItems(updatedItems.filter(item => item.status === filter));
        setDescription('');
        setFilter(FilterStatus.PENDING);
      })
      .catch(error => Alert.alert('Erro', 'Erro ao adicionar item'));
  }

  const handleRemoveItem = (id: string) => {
    itemsStorage.remove(id)
      .then((updatedItems) => {
        setItems(updatedItems.filter(item => item.status === filter));
      })
      .catch(error => Alert.alert('Erro', 'Erro ao remover item'));
  }

  const handleUpdateStatus = (id: string) => {
    itemsStorage.toggleStatus(id)
      .then((updatedItems) => {
        setItems(updatedItems.filter(item => item.status === filter));
      })
      .catch(error => Alert.alert('Erro', 'Erro ao atualizar item'));
  }

  const handleClearItems = () => {
    Alert.alert('Atenção', 'Deseja limpar todos os itens?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Limpar',
        onPress: () => {
          itemsStorage.clear()
            .then(() => {
              setItems([]);
            })
            .catch(error => Alert.alert('Erro', 'Erro ao limpar itens'));
        },
      },
    ]);
  }

  useEffect(() => {
    itemsStorage.getByStatus(filter)
      .then(setItems)
      .catch(error => Alert.alert('Erro', 'Erro ao buscar itens'));
  }, [filter]);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?"
          onChangeText={setDescription}
          value={description}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>

        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity
            style={styles.clearButton}
            activeOpacity={0.8}
            onPress={handleClearItems}
            disabled={items.length === 0}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.emptyText}>Nenhum item encontrado</Text>}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onChangeStatus={() => handleUpdateStatus(item.id)}
              onRemove={() => handleRemoveItem(item.id)} />
          )}
        />

      </View>
    </View>
  );
}
