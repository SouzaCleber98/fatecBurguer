function LocationMap() {
  return (
    <div className="location-map">
      <iframe
        className="h-100 w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.836601572548!2d-46.95590342502451!3d-22.43183957979109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c86c8b6f8b6f8b%3A0x0!2sEscola%20T%C3%A9cnica%20Estadual%20Pedro%20Ferreira%20Alves!5e0!3m2!1spt-BR!2sbr!4v1694790000000"
        allowFullScreen
        loading="lazy"
        title="Localização da FatecBurger no Google Maps"
      />
    </div>
  );
}

export default LocationMap;
