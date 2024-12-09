export type TSupply = {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
  supplyName: string;
  donorEmail?: string;
  amount: string;
  category: string;
  image: Image;
  collectedAmount: string;
  title: string;
  overview: string;
  description: string;
  time: string;
};

export interface Image {
  imageUrl: string;
}

export type TSupplyCardProps = {
  campain: TSupply;
};

export type RecordType = {
  name: string;
  email: string;
  image: string;
  supplyName: string;
  category: string;
  key: string;
  isApproved?: boolean;
  referenceId?: string;
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

export type DataItem = {
  _id: string;
  name: string;
  email: string;
  image?: { imageUrl: string };
  supplyName: string;
  category: string;
  contactNo?: string;
  referenceId?: string;
  isApproved?: boolean;
  // Add any other properties if necessary
};
