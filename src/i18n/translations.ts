export type Language = 'en' | 'es';

export type TranslationKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.services'
  | 'nav.fleet'
  | 'nav.contact'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.slogan'
  | 'hero.sloganEn'
  | 'hero.cta'
  | 'hero.quote'
  | 'about.title'
  | 'about.heading'
  | 'about.subtitle'
  | 'about.p1'
  | 'about.p2'
  | 'about.cta'
  | 'fleet.title'
  | 'fleet.heading'
  | 'fleet.subtitle'
  | 'fleet.carName'
  | 'fleet.feature1'
  | 'fleet.feature2'
  | 'fleet.feature3'
  | 'fleet.feature4'
  | 'fleet.p1'
  | 'fleet.p2'
  | 'services.title'
  | 'services.heading'
  | 'services.subtitle'
  | 'services.airport'
  | 'services.airportDesc'
  | 'services.hourly'
  | 'services.hourlyDesc'
  | 'services.pointToPoint'
  | 'services.pointToPointDesc'
  | 'services.wedding'
  | 'services.weddingDesc'
  | 'services.cityTour'
  | 'services.cityTourDesc'
  | 'services.concert'
  | 'services.concertDesc'
  | 'services.prom'
  | 'services.promDesc'
  | 'services.birthday'
  | 'services.birthdayDesc'
  | 'services.roundTrip'
  | 'services.roundTripDesc'
  | 'services.other'
  | 'form.title'
  | 'form.subtitle'
  | 'form.firstName'
  | 'form.lastName'
  | 'form.pickupDate'
  | 'form.pickupTime'
  | 'form.pickupLocation'
  | 'form.destination'
  | 'form.serviceType'
  | 'form.hours'
  | 'form.passengers'
  | 'form.phone'
  | 'form.email'
  | 'form.submit'
  | 'form.success'
  | 'form.error'
  | 'form.selectService'
  | 'form.selectHours'
  | 'form.selectTime'
  | 'form.required'
  | 'footer.tagline'
  | 'footer.copyright'
  | 'footer.links'
  | 'footer.contact'
  | 'footer.followUs';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.fleet': 'Our Fleet',
    'nav.contact': 'Contact',
    'hero.title': 'Luxury Transportation',
    'hero.subtitle': 'Experience elegance and comfort with every ride',
    'hero.slogan': 'Black Bird Service',
    'hero.sloganEn': 'Safety and comfort without limits',
    'hero.cta': 'Book Your Ride',
    'hero.quote': 'Request a Quote',
    'about.title': 'About Us',
    'about.heading': 'Premium Chauffeur Service',
    'about.subtitle': 'Elevating your travel experience',
    'about.p1': 'At Black Bird Services, we redefine luxury transportation. With our flagship Cadillac XT6, we provide an exclusive, personalized experience for every client. Our professional chauffeurs are committed to punctuality, safety, and discretion — ensuring every journey is as enjoyable as the destination.',
    'about.p2': 'Whether you need airport transfer, a night out on the town, or a special event ride, we deliver unparalleled comfort and style. Every detail is curated to make you feel like royalty.',
    'about.cta': 'Learn More',
    'fleet.title': 'Our Fleet',
    'fleet.heading': 'Cadillac XT6',
    'fleet.subtitle': 'Sophistication on wheels',
    'fleet.carName': 'Cadillac XT6',
    'fleet.feature1': 'Premium Leather Interior',
    'fleet.feature2': 'Up to 4 Passengers',
    'fleet.feature3': 'Climate Control',
    'fleet.feature4': 'Entertainment System',
    'fleet.p1': 'Experience the perfect blend of luxury and performance in our meticulously maintained Cadillac XT6. With its premium leather seats, advanced climate control, and smooth ride, every trip becomes a first-class experience.',
    'fleet.p2': 'Our vehicle undergoes rigorous maintenance and detailing after every service, ensuring you arrive in style and comfort.',
    'services.title': 'Our Services',
    'services.heading': 'Tailored Transportation Solutions',
    'services.subtitle': 'Every journey, crafted to perfection',
    'services.airport': 'Airport Transfer',
    'services.airportDesc': 'Reliable and punctual airport transportation with luggage assistance and flight tracking.',
    'services.hourly': 'Hourly / As Directed',
    'services.hourlyDesc': 'Flexible hourly service tailored to your schedule, for any errand or appointment.',
    'services.pointToPoint': 'Point-to-Point',
    'services.pointToPointDesc': 'Direct, efficient transportation between any two locations of your choice.',
    'services.wedding': 'Wedding',
    'services.weddingDesc': 'Make your special day unforgettable with elegant wedding transportation.',
    'services.cityTour': 'City Tour',
    'services.cityTourDesc': 'Explore the city in comfort and style with a personalized tour experience.',
    'services.concert': 'Concert',
    'services.concertDesc': 'Arrive in style and on time for concerts and live events.',
    'services.prom': 'Prom',
    'services.promDesc': 'Celebrate prom night with luxury transportation for you and your friends.',
    'services.birthday': 'Birthday Party',
    'services.birthdayDesc': 'Make your birthday celebration extra special with premium chauffeur service.',
    'services.roundTrip': 'Round Trip',
    'services.roundTripDesc': 'Convenient round-trip service with scheduled pickups for both directions.',
    'services.other': 'Other Events',
    'form.title': 'Request Your Instant Quote',
    'form.subtitle': 'Tell us about your trip and we\'ll get back to you within minutes',
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.pickupDate': 'Pick Up Date',
    'form.pickupTime': 'Pick Up Time',
    'form.pickupLocation': 'Pick Up Location',
    'form.destination': 'Destination',
    'form.serviceType': 'Type of Service',
    'form.hours': 'Number of Hours',
    'form.passengers': 'Passengers',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.submit': 'GET YOUR QUOTE',
    'form.success': 'Your quote request has been sent successfully! We will contact you shortly.',
    'form.error': 'There was an error sending your request. Please try again.',
    'form.selectService': 'Select service type',
    'form.selectHours': 'Select hours',
    'form.selectTime': 'Select time',
    'form.required': '*',
    'footer.tagline': 'Safety and comfort without limits',
    'footer.copyright': '© 2026 Black Bird Services. All rights reserved.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.followUs': 'Follow Us',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.fleet': 'Flota',
    'nav.contact': 'Contacto',
    'hero.title': 'Transporte de Lujo',
    'hero.subtitle': 'Experimenta elegancia y confort en cada viaje',
    'hero.slogan': 'Black Bird Service',
    'hero.sloganEn': 'Seguridad y confort sin límites',
    'hero.cta': 'Reserva tu Viaje',
    'hero.quote': 'Solicita una Cotización',
    'about.title': 'Sobre Nosotros',
    'about.heading': 'Servicio de Chófer Premium',
    'about.subtitle': 'Elevando tu experiencia de viaje',
    'about.p1': 'En Black Bird Services, redefinimos el transporte de lujo. Con nuestro Cadillac XT6 insignia, ofrecemos una experiencia exclusiva y personalizada para cada cliente. Nuestros chóferes profesionales se comprometen con la puntualidad, seguridad y discreción, asegurando que cada viaje sea tan placentero como el destino.',
    'about.p2': 'Ya sea que necesites transporte al aeropuerto, una noche en la ciudad o un viaje para un evento especial, ofrecemos comodidad y estilo inigualables. Cada detalle está curado para que te sientas como realeza.',
    'about.cta': 'Saber Más',
    'fleet.title': 'Nuestra Flota',
    'fleet.heading': 'Cadillac XT6',
    'fleet.subtitle': 'Sofisticación sobre ruedas',
    'fleet.carName': 'Cadillac XT6',
    'fleet.feature1': 'Interior de Cuero Premium',
    'fleet.feature2': 'Hasta 4 Pasajeros',
    'fleet.feature3': 'Control de Clima',
    'fleet.feature4': 'Sistema de Entretenimiento',
    'fleet.p1': 'Experimenta la combinación perfecta de lujo y rendimiento en nuestro meticulosamente mantenido Cadillac XT6. Con sus asientos de cuero premium, control de clima avanzado y conducción suave, cada viaje se convierte en una experiencia de primera clase.',
    'fleet.p2': 'Nuestro vehículo recibe mantenimiento riguroso y detallado después de cada servicio, asegurando que llegues con estilo y comodidad.',
    'services.title': 'Nuestros Servicios',
    'services.heading': 'Soluciones de Transporte Personalizadas',
    'services.subtitle': 'Cada viaje, creado a la perfección',
    'services.airport': 'Traslado al Aeropuerto',
    'services.airportDesc': 'Transporte al aeropuerto confiable y puntual con asistencia de equipaje y seguimiento de vuelos.',
    'services.hourly': 'Por Hora / Según Indicaciones',
    'services.hourlyDesc': 'Servicio por hora flexible adaptado a tu horario, para cualquier recado o cita.',
    'services.pointToPoint': 'Punto a Punto',
    'services.pointToPointDesc': 'Transporte directo y eficiente entre dos ubicaciones de tu elección.',
    'services.wedding': 'Boda',
    'services.weddingDesc': 'Haz de tu día especial un momento inolvidable con transporte elegante para bodas.',
    'services.cityTour': 'Tour por la Ciudad',
    'services.cityTourDesc': 'Explora la ciudad con comodidad y estilo en un tour personalizado.',
    'services.concert': 'Concierto',
    'services.concertDesc': 'Llega con estilo y a tiempo para conciertos y eventos en vivo.',
    'services.prom': 'Prom / Graduación',
    'services.promDesc': 'Celebra la noche de graduación con transporte de lujo para ti y tus amigos.',
    'services.birthday': 'Fiesta de Cumpleaños',
    'services.birthdayDesc': 'Haz que tu celebración de cumpleaños sea aún más especial con servicio de chófer premium.',
    'services.roundTrip': 'Viaje Redondo',
    'services.roundTripDesc': 'Servicio de viaje redondo conveniente con recogidas programadas para ambas direcciones.',
    'services.other': 'Otros Eventos',
    'form.title': 'Solicita tu Cotización Instantánea',
    'form.subtitle': 'Cuéntanos sobre tu viaje y te responderemos en minutos',
    'form.firstName': 'Nombre',
    'form.lastName': 'Apellido',
    'form.pickupDate': 'Fecha de Recogida',
    'form.pickupTime': 'Hora de Recogida',
    'form.pickupLocation': 'Lugar de Recogida',
    'form.destination': 'Destino',
    'form.serviceType': 'Tipo de Servicio',
    'form.hours': 'Número de Horas',
    'form.passengers': 'Pasajeros',
    'form.phone': 'Teléfono',
    'form.email': 'Correo Electrónico',
    'form.submit': 'OBTÉN TU COTIZACIÓN',
    'form.success': '¡Tu solicitud de cotización se ha enviado con éxito! Te contactaremos pronto.',
    'form.error': 'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.',
    'form.selectService': 'Selecciona tipo de servicio',
    'form.selectHours': 'Selecciona horas',
    'form.selectTime': 'Selecciona hora',
    'form.required': '*',
    'footer.tagline': 'Seguridad y confort sin límites',
    'footer.copyright': '© 2026 Black Bird Services. Todos los derechos reservados.',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Información de Contacto',
    'footer.followUs': 'Síguenos',
  },
};

export default translations;
