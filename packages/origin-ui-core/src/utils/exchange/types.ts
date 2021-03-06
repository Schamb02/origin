import { Filter, Operator, OrderSide, Product } from '@energyweb/exchange-core';

export type DeviceVintageDTO = {
    year: number;
    operator?: Operator;
};

export interface IProductDTO {
    deviceType?: string[];
    location?: string[];
    deviceVintage?: DeviceVintageDTO;
    generationFrom?: string;
    generationTo?: string;
    gridOperator?: string[];
}

export interface ITradeDTO {
    id: string;
    created: string;
    volume: string;
    price: number;
    bidId: string;
    askId: string;
}

export type CreateBidDTO = {
    volume: string;
    price: number;
    validFrom: string;
    product: IProductDTO;
};

export type CreateAskDTO = {
    volume: string;
    price: number;
    validFrom: string;
    assetId: string;
};

export interface IProductFilterDTO extends IProductDTO {
    deviceTypeFilter: Filter;
    locationFilter: Filter;
    deviceVintageFilter: Filter;
    generationTimeFilter: Filter;
    gridOperatorFilter: Filter;
}

export interface IAsset {
    id: string;
    address: string;
    tokenId: string;
    deviceId: string;
    generationFrom: string;
    generationTo: string;
}

export type AccountAsset = {
    asset: IAsset;
    amount: string;
};

export type AccountBalance = {
    available: AccountAsset[];
    locked: AccountAsset[];
};

export type ExchangeAccount = {
    address: string;
    balances: AccountBalance;
};

export enum TransferStatus {
    Unknown,
    Accepted,
    Unconfirmed,
    Confirmed,
    Error
}

export enum TransferDirection {
    Deposit,
    Withdrawal
}

export interface ITransfer {
    id: string;
    userId: string;
    asset: IAsset;
    amount: string;
    transactionHash: string;
    address: string;
    status: TransferStatus;
    confirmationBlock?: number;
    direction: TransferDirection;
}

export interface IOrderBookOrderDTO {
    id: string;
    price: number;
    volume: string;
    product: Product;
    userId: string;
    assetId?: string;
}

export type TOrderBook = {
    asks: IOrderBookOrderDTO[];
    bids: IOrderBookOrderDTO[];
};

export interface IDirectBuyDTO {
    askId: string;
    volume: string;
    price: number;
}

export interface IOrder {
    id: string;
    side: OrderSide;
    validFrom: string;
    product: Product;
    price: number;
    startVolume: string;
    currentVolume: string;
    directBuyId: string;
    assetId: string;
    userId: string;
}

export type Order = IOrder & { assetId: string };
