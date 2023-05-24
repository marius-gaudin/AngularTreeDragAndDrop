export type Node = {
  id: number;
  title: string;
  parent: number | null;
  open: boolean;
};