export interface Store {
  id: string;
  name: string;
  itemCount: number;
  leader: string;
  lastReorder: string;
}

export interface StoreItem {
  id: string;
  name: string;
  category: string;
  department: string;
  lastReorder: string;
  quantity: number;
}
