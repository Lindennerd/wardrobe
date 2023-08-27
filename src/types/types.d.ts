export type Localization = {
  latitude: string;
  longitude: string;
  fullAddress: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  localization: Localization;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type LoginRequest = {
  user: string;
  password: string;
};

export type Cloth = {
  name: string;
  mimeType: string;
  image: string;
  classification: {
    description: string;
    confidence: number;
    appropiateWeather: AppropriateWeather;
    bodyPart: BodyPart;
  };
};

export enum AppropriateWeather {
  Warm,
  Cold,
  Both,
}

export enum BodyPart {
  Head,
  Body,
  Legs,
  Feet,
}
