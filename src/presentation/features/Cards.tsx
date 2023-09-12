import { NoPadCard } from "../components/Card";
import { IconGradientCard } from "../components/IconCard";
import wallet from "../assets/images/wallet_yellow.png";
import stock from "../assets/images/stock.png";
import { IconCard } from "../components/IconCard";

const WalletCard = () => {
  return (
    <NoPadCard>
      <IconGradientCard Icon={wallet} text="200$" sub="Wallet" />
    </NoPadCard>
  );
};

const StocksCard = () => {
  return (
    <NoPadCard>
      <IconCard Icon={stock} text="250" sub="Stocks" />
    </NoPadCard>
  );
};

export { WalletCard, StocksCard };
