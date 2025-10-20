import Header from "../components/layout/Header";
import ProductItem from "../components/ui/ProductItem";

const itemCatalog = [
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 1",
        preco: "R$ 25,00",
        descricao: "Duis semper in metus eu suscipit. Aliquam erat volutpat.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 2",
        preco: "R$ 30,00",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 3",
        preco: "R$ 28,00",
        descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 3",
        preco: "R$ 28,00",
        descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 3",
        preco: "R$ 28,00",
        descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 3",
        preco: "R$ 28,00",
        descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        nome: "Lanche 3",
        preco: "R$ 28,00",
        descricao: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

];

function Cardapio() {

    return (
        <>
            <Header />
            <main>
                <div className="cardapio-container">
                    {itemCatalog.map((produto, index) => (
                        <ProductItem
                            key={index}
                            img={produto.img}
                            nome={produto.nome}
                            preco={produto.preco}
                            descricao={produto.descricao}
                        />
                    ))}
                </div>
            </main>
        </>

    );
}

export default Cardapio;
