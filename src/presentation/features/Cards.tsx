import { NoPadCard } from "../components/Card";
import { IconGradientCard } from "../components/IconCard";
import wallet from "../assets/images/wallet_yellow.png";
import stock from "../assets/images/stock.png";
import { IconCard } from "../components/IconCard";

interface CardProps {
  text: string;
}
const WalletCard = ({ text }: CardProps) => {
  return (
    <NoPadCard>
      <IconGradientCard Icon={wallet} text={text} sub="Wallet" />
    </NoPadCard>
  );
};

const StocksCard = ({ text }: CardProps) => {
  return (
    <NoPadCard>
      <IconCard Icon={stock} text={text} sub="Stocks" />
    </NoPadCard>
  );
};

export { WalletCard, StocksCard };
