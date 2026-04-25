import Image from "next/image";
import visaCard from "@/../public/visa.svg";
import masterCard from "@/../public/master.svg";
import amexCard from "@/../public/amex.svg";
import paypalCard from "@/../public/paypal.svg";
import dinersCard from "@/../public/diners.svg";

const PaymentSecurity = () => {
  const payments = [
    { name: "Visa", src: visaCard },
    { name: "Mastercard", src: masterCard },
    { name: "American Express", src: amexCard },
    { name: "PayPal", src: paypalCard },
    { name: "Diners Club", src: dinersCard },
  ];

  return (
    <div className="bg-white p-7 rounded-[10x]">
      <h6 className="mr-0 text-base font-medium">Payment & Security</h6>

      <div className="flex flex-wrap gap-2 mt-3">
        {payments.map((item) => (
          <div key={item.name} className="w-10 h-6 relative" title={item.name}>
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Your payment information is processed securely. We do not store credit
        card details nor have access to your credit card information.
      </p>
    </div>
  );
};

export default PaymentSecurity;
