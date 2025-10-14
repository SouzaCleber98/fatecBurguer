function HomeBanner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <h1>Bem Vindo!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim eu diam suscipit hendrerit.
            In porta feugiat risus at posuere. Aenean posuere, sapien nec porta feugiat, lorem lectus
            condimentum justo, in laoreet libero turpis vel ante. Donec magna leo, ultricies sed lacus et, porta
            convallis odio. Donec dictum cursus urna at lacinia.
          </p>
        </div>
        
        <div className="banner-right">
          <a href="#" className="banner-btn">Entrar</a>
          <a href="menu.html" className="banner-btn">Cardápio</a>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
