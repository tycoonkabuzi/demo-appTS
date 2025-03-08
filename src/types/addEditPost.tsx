export type NewData = { title: string; body: string };
export interface PropNewData {
  getNewData: (newData: NewData) => void;
}
