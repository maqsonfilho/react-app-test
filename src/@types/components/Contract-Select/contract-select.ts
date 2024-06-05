export interface Contract {
  id: number;
  descricaoMaterial: string;
  codMaterial: number;
}

export interface ContractSelectProps {
  onSelect: (contract: Contract) => void;
}
