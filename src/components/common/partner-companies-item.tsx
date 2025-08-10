"use client";
import Image from "next/image";

interface PartnerCompanyProps {
  company: {
    id: number;
    name: string;
    logo: string;
  };
}

const PartnerCompaniesItem = ({ company }: PartnerCompanyProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="max-h-[106px] max-w-[80px] rounded-2xl border border-[#F1F1F1] p-6">
        <Image
          src={company.logo}
          alt={company.name}
          width={32}
          height={32}
          className="h-fit w-fit"
        />
      </div>
      <p className="truncate text-xs font-medium">{company.name}</p>
    </div>
  );
};

export default PartnerCompaniesItem;
