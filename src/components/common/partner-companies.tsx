import PartnerCompaniesItem from "./partner-companies-item";

const partnerCompanies = [
  {
    id: 1,
    name: "Nike",
    logo: "/simple-icons_nike.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "/simple-icons_adidas.svg",
  },
  {
    id: 3,
    name: "Puma",
    logo: "/simple-icons_puma.svg",
  },
  {
    id: 4,
    name: "New Balance",
    logo: "/simple-icons_newbalance.svg",
  },
];

const PartnerCompanies = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex gap-5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {partnerCompanies.map((company) => (
          <PartnerCompaniesItem key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanies;
