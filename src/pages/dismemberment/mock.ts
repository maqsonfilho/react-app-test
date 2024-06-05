import { SelectOption } from '~/@types/components/Table/table-body-props';

export const columnsContract = [
  { title: 'Item', dataIndex: 'item', width: 50 },
  { title: 'Cod. Material', dataIndex: 'codMaterial', width: 75 },
  { title: 'Descrição Material', dataIndex: 'descricaoMaterial', width: 150 },
  { title: 'Hierarquia', dataIndex: 'hierarquia', width: 150 },
  { title: 'Embalagem', dataIndex: 'embalagem', width: 100 },
  { title: 'Data Vencimento Germo (Dt. Ef. Fx)', dataIndex: 'dataVencimento', width: 150 },
  { title: 'TSI', dataIndex: 'tsi', width: 50 },
  { title: 'Quantidade', dataIndex: 'quantidade', width: 80 },
  { title: 'Saldo', dataIndex: 'saldo', width: 50 },
  { title: 'Germoplasma', dataIndex: 'germoplasma', width: 100 },
  { title: 'Royalties  R$', dataIndex: 'royalties', width: 75 },
  { title: '', dataIndex: '', width: 30 },
];

export const dataContract = [
  {
    item: 50,
    codMaterial: 106732,
    descricaoMaterial: 'SEM SOJA 80I82RSF IPRO 5M',
    hierarquia: 'Y0003Y0004Y0010',
    embalagem: 'Z001',
    dataVencimento: '30.08.2023',
    tsi: 999,
    quantidade: 190,
    saldo: 185,
    germoplasma: 'R$ 5.393,65',
    royalties: '',
    tsiR$: '',
    frete: '',
    actions: '',
  },
  {
    item: 10,
    codMaterial: 106732,
    descricaoMaterial: 'SEM SOJA 80I82RSF IPRO 5M',
    hierarquia: 'Y0003Y0004Y0010',
    embalagem: 'Z001',
    dataVencimento: '30.08.2023',
    tsi: 999,
    quantidade: 190,
    saldo: 185,
    germoplasma: 'R$ 5.393,65',
    royalties: '',
    tsiR$: '',
    frete: '',
    actions: '',
  },
  {
    item: 20,
    codMaterial: 102643,
    descricaoMaterial: 'SEM SOJA 77I79RSF IPRO 5M',
    hierarquia: 'Y0003Y0004Y0009',
    embalagem: 'Z001',
    dataVencimento: '30.08.2023',
    tsi: 999,
    quantidade: 10,
    saldo: 5,
    germoplasma: 'R$ 5.457,74',
    royalties: '',
    tsiR$: '',
    frete: '',
    actions: '',
  },
  {
    item: 30,
    codMaterial: 102547,
    descricaoMaterial: 'SEM SOJA 8473 RSF 5M',
    hierarquia: 'Y0003Y0005Y0001',
    embalagem: 'Z001',
    dataVencimento: '30.08.2023',
    tsi: 999,
    quantidade: 10,
    saldo: 5,
    germoplasma: 'R$ 5.455,00',
    royalties: '',
    tsiR$: '',
    frete: '',
    actions: '',
  },
  {
    item: 40,
    codMaterial: 109363,
    descricaoMaterial: 'SEM SOJA 7601I2X 5M',
    hierarquia: 'Y0011Y0005Y0003',
    embalagem: 'Z001',
    dataVencimento: '30.08.2023',
    tsi: 999,
    quantidade: 30,
    saldo: 25,
    germoplasma: 'R$ 5.175,00',
    royalties: '',
    tsiR$: '',
    frete: '',
    actions: '',
  },
];

const handleSelectChange = (value: any, record: any) => {
  console.log('Valor selecionado:', value);
  console.log('Registro correspondente:', record);
};

const selectCodOptions: SelectOption[] = [
  ...Array.from({ length: 10 }, (_, i) => i + 1).map((num) => ({
    label: num.toString().padStart(6, '0'),
    value: num.toString().padStart(6, '0'),
  })),
];

const selectOptions: SelectOption[] = [
  ...Array.from({ length: 999 }, (_, i) => i + 1).map((num) => ({
    label: num.toString().padStart(3, '0'),
    value: num.toString().padStart(3, '0'),
  })),
];

const handleCodSelectChange = (value: any, record: any) => {
  console.log('Valor selecionado:', value);
  console.log('Registro correspondente:', record);
};
export const columnsDis = [
  { title: 'Item', dataIndex: 'item', width: 50 },
  {
    title: 'Cod. Material',
    dataIndex: 'codMaterial',
    width: 75,
    renderSelect: true,
    selectOptions: selectCodOptions,
    onSelectChange: handleCodSelectChange,
  },
  { title: 'Descrição Material', dataIndex: 'descricaoMaterial', width: 150 },
  {
    title: 'TSI',
    dataIndex: 'tsi',
    width: 100,
    renderSelect: true,
    selectOptions: selectOptions,
    onSelectChange: handleSelectChange,
  },
  { title: 'CPF/CNPJ', dataIndex: 'cpf', width: 100 },
  { title: 'IE', dataIndex: 'ie', width: 60 },
  { title: 'UF', dataIndex: 'uf', width: 60 },
  { title: 'Municipío', dataIndex: 'municipio', width: 80 },
  { title: 'Quantidade', dataIndex: 'quantidade', width: 100 },
  { title: '', dataIndex: '', width: 30 },
];

export const dataDis: any[] = [];
