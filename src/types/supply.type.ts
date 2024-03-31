export type TSupply = {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
  supplyName: string;
  quantity: string;
  category: string;
  image: Image;
  isApplied: boolean;
};

export interface Image {
  imageUrl: string;
}

export type TSupplyCardProps = {
  supply: TSupply;
};

export type RecordType = {
  name: string;
  email: string;
  image: string;
  supplyName: string;
  category: string;
  key: string;
};

export type DataItemType = {
  _id: string;
  name: string;
  email: string;
  supplyName: string;
  category: string;
  referenceId: string;
  isApproved: boolean;
};
