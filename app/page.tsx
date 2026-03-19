import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from './components/HeroCarousel';
import ServicesList from './components/ServicesList';

const servicesData = [
  { slug: "venta-de-material-ornamental", title: "Venta de material ornamental", desc: "Variedad de piedras decorativas, tierra con sustrato, cascarilla, humus de lombriz, abonos, insecticidas y en general el material acorde a la jardinería.", img: "/servicios/venta-de-material-ornamental/servicio_ornamental1.jpg" },
  { slug: "paisajismo", title: "Paisajismo", desc: "Nuestra técnica combina la aplicación del arte, la ciencia y el diseño en la creación de entornos naturales. Realizamos cambios en espacios exteriores utilizando las plantas y recursos naturales adecuados para mejorar sus características físicas y estéticas.", img: "/servicios/paisajismo/servicio_paisajismo1.jpg" },
  { slug: "cerramientos-en-cerca-viva", title: "Cerramientos en cerca viva", desc: "Sembrado y acondicionamiento (una o varias especies) lineal de arbustos para delimitación de propiedades o espacios.", img: "/servicios/cerramientos-en-cerca-viva/servicio_cerramientos_en_cerca_viva1.png" },
  { slug: "asesoria-personalizada", title: "Asesoría personalizada", desc: "Te ayudamos a crear el espacio que siempre has soñado. Acompañamiento en el proceso de selección de plantas y diseño, para que los espacios intervenidos reflejen los gustos y sentimientos del cliente final.", img: "/servicios/asesoria-personalizada/servicio_asesoria_personalizada1.jpg" },
  { slug: "jardineria", title: "Jardinería", desc: "Sembramos plantas ornamentales en áreas abiertas o cerradas, seleccionadas por la belleza de sus flores u hojas, con fines decorativos y de valorización.", img: "/servicios/jardineria/servicio_jardineria1.jpg" },
  { slug: "instalacion-de-cesped", title: "Instalación de césped", desc: "Ofrecemos instalación profesional de césped para jardines, terrazas y zonas verdes. Aseguramos el mejor terreno para que su prado crezca fuerte y con un verde vibrante.", img: "/servicios/instalacion-de-cesped/servicio_instalacion_cespeced1.jpg" }
];

export default function Home() {

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-item">
          <svg className="top-bar-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
          viverosanmiguelsys@gmail.com
        </div>
        <div className="top-bar-item">
          <svg className="top-bar-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
          Fusagasugá: Parcela 9 las brisas de Xochimilco
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="logo-container">
          <Image unoptimized src="/vivero_logo.png" alt="Vivero Sanmiguel Logo" width={180} height={80} className="logo-img" />
        </div>

        <nav className="nav-links">
          <a href="#" className="nav-item active">Inicio</a>
          <a href="#servicios" className="nav-item">Servicios</a>
          <a href="#plantas" className="nav-item">Plantas</a>
          <a href="#nosotros" className="nav-item">Nosotros</a>

          <div className="nav-contact-box">
            <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', fill: 'white' }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            <span>
              <small>Llámanos!</small>
              314-821-0636
            </span>
          </div>

          <a href="#contacto" className="btn-green" style={{ padding: '8px 20px' }}>Contáctanos</a>
        </nav>
      </header>

      {/* Hero Redesign */}
      <section className="hero-new">

        {/* Background Image Slider */}
        <div className="hero-slider">
          <div className="hero-slide"></div>
          <div className="hero-slide"></div>
          <div className="hero-slide"></div>
        </div>
        <div className="hero-overlay"></div>

        {/* Central Content */}
        <div className="hero-new-title-box">

          <h1 style={{ fontSize: '3.6rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '10px', color: 'white', letterSpacing: '-1px' }}>
            Diseña, cultiva y mantén
          </h1>
          <h2 style={{ fontSize: '3.2rem', fontWeight: '400', color: 'rgba(255,255,255,0.95)', marginBottom: '30px' }}>
            tus espacios verdes
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'white', marginBottom: '50px', maxWidth: '650px', fontWeight: '500', lineHeight: '1.6' }}>
            Transformamos tus áreas con diseño emocional y moderno de la mano de la naturaleza. Gestiona eficientemente tu jardín y aumenta tu vitalidad.
          </p>

          <a href="#servicios" style={{ background: '#1c7be3', color: 'white', padding: '16px 40px', fontSize: '1.15rem', fontWeight: 'bold', borderRadius: '12px', textDecoration: 'none', transition: 'background 0.3s', boxShadow: '0 10px 20px rgba(28, 123, 227, 0.4)' }}>
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="bg-sand">
        <h2 className="section-title">¿Quiénes somos?</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Una compañía que transforma espacios en verdes y modernos lugares llenos de energía vital. Embellecemos hogares, lugares de trabajo, centros comerciales, clínicas, clubes, fincas, terrazas, cubiertas de edificios con hermosas plantas sembradas en nuestro vivero, diseño de jardines y cercas vivas.
            </p>
            <p>
              <strong>Te ayudamos a recuperar, remodelar, renovar, y diseñar espacios amigables con el ecosistema.</strong>
            </p>
          </div>
          <div className="about-image">
            <Image src="/quienes-somos.jpeg" alt="Nuestro Vivero" width={600} height={400} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <ServicesList services={servicesData} />

      {/* Lista de Plantas */}
      <section id="plantas" style={{ background: 'white' }}>
        <h2 className="section-title">Plantas</h2>
        <p className="section-subtitle">Conoce algunas de las hermosas especies que cultivamos en Vivero Sanmiguel.</p>

        <div className="cards-grid">
          <div className="plant-card">
            <Image src="/planta_cayeno.jpg" alt="Cayeno" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Cayeno</h3>
              <p className="card-desc">Esta especie de arbusto alcanza una altura entre 2 a 5 m de altura. Existen numerosas variedades, con una amplia gama de colores en sus flores simples o dobles; blanco puro, amarillo, naranja, rojo escarlata y tintes rosados, hacen parte de su oferta.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_orejaraton.jpg" alt="Oreja de Ratón" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Oreja de Ratón</h3>
              <p className="card-desc">Planta rastrera, resistente y de rápido crecimiento que consume menos agua que el césped. Esta especie se reproduce fácilmente por semillas y a través de estolones.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_arbol_jade.jpg" alt="Árbol de Jade" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Árbol de Jade</h3>
              <p className="card-desc">Planta de la familia de las suculentas, con porte arbustivo, que destaca por su sencillez de cultivo. No requiere de mucha agua, sus hojas son las encargadas de almacenarla junto con los nutrientes que necesitan para crecer.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_orquidea.jpg" alt="Orquídea" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Orquídea</h3>
              <p className="card-desc">Familia de plantas más diversa del mundo, caracterizadas por la bella coloración de sus flores. Los climas tropicales húmedos favorecen su floración.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_hiedra_mami.jpg" alt="Hiedra Miami" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Hiedra Miami</h3>
              <p className="card-desc">Planta enredadera de gran versatilidad. Crece en casi todos los ambientes exteriores e interiores, pues se adapta bien a entornos de mucho sol o de sombra. Aporta una estética agradable a los espacios. Se debe podar para que su crecimiento esté entre 10 a 20 cms al año.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_suculentas.jpg" alt="Suculentas" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Suculentas</h3>
              <p className="card-desc">Grupo de plantas que comparten características similares. Todas almacenan agua en sus raíces, tallos u hojas carnosas.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_duranta_limon.jpg" alt="Duranta Limón" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Duranta Limón</h3>
              <p className="card-desc">Arbusto ornamental muy popular por su vistoso follaje verde amarillento. Es ideal para formar setos y figuras, de crecimiento rápido y fácil mantenimiento en lugares soleados.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_duranta_variegada.jpg" alt="Duranta Variegada" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Duranta Variegada</h3>
              <p className="card-desc">Hermoso arbusto de hojas bicolores con bordes blancos o cremas. Destaca por su atractivo contraste y sus pequeñas flores lilas o blancas, requiriendo podas regulares para mantener su forma.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_eugenia.jpg" alt="Eugenia" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Eugenia</h3>
              <p className="card-desc">Excelente planta de exterior para crear cercos vivos o topiarios. Sus hojas tiernas presentan tonalidades rojizas que luego viran a un verde intenso, además produce pequeños frutos decorativos.</p>
            </div>
          </div>
          <div className="plant-card">
            <Image src="/planta_lirio_de_paramo.jpg" alt="Lirio de Páramo" fill className="plant-card-image" />
            <div className="plant-overlay"></div>
            <div className="plant-content">
              <h3 className="card-title">Lirio de Páramo</h3>
              <p className="card-desc">Especie adaptada a climas fríos y de montaña. Posee hojas alargadas y hermosas flores que destacan en jardines de altura, requiriendo suelos bien drenados y humedad constante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué somos los mejores */}
      <section className="why-us bg-sand">
        <h2 className="section-title">¿Por qué somos los mejores?</h2>
        <p>
          Imprimimos la esencia del cliente en la selección de plantas y el diseño de los jardines. Armonizamos espacios aplicando el concepto de <strong>“Diseño Emocional”</strong> para generar ambientes cálidos, sin descuidar el equilibrio con el medio ambiente.
        </p>
        <p>
          Nuestro vivero propio en el municipio de Fusagasugá (Cundinamarca) cuenta con plantas cuidadas por personal experto y tratadas con insumos de alta calidad.
        </p>
        <p style={{ fontSize: '1.4rem', color: 'var(--primary-green)', fontWeight: '800', marginTop: '35px', letterSpacing: '-0.5px' }}>
          La política de servicio al cliente es: “Calidad y cumplimiento en la ejecución de nuestros proyectos”.
        </p>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="faq bg-sand">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <details>
            <summary>1.- Que características de la planta indican que están enfermas?</summary>
            <div style={{ paddingTop: '15px' }}>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Hojas y tallos largos amarillentos</li>
                <li>Hojas y tallos pálidos que crecen débilmente con dirección a la luz</li>
                <li>Menos hojas en las plantas maduras</li>
                <li>Hojas muy delgadas y poco camosas</li>
              </ul>
            </div>
          </details>

          <details>
            <summary>2.- Que hacer con las plantas enfermas por falta de luz?</summary>
            <div style={{ paddingTop: '15px' }}>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '10px' }}>Las plantas son incapaces de sintetizar su alimento si no tienen una luz adecuada, así que en plantas de interior hay que mover la planta hacia una ventana orientada hacia el sur, este ajuste debe ser gradual para evitar quemar la planta. De no contar con luz natural se deberá añadir luz artificial con bombillos de espectro completo y recordar apagarlas en la noche.</p>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Para las plantas de exterior puede ser útil podar las plantas cercanas que le estén dando demasiada sombra a la planta débil, ubicar la planta en una posición adecuada con respecto al sol. Para aquellas que requieran más luz ubicarlas con dirección al sur y si requieren menos luz se orientarán al norte, sirviéndose del oeste y el este como puntos medios. La luz artificial puede utilizarse en sitios de difícil acceso a la luz o en épocas de invierno.</p>
            </div>
          </details>

          <details>
            <summary>3.- Que medidas preventivas se pueden adoptar para evitar la enfermedades por falta de agua?</summary>
            <div style={{ paddingTop: '15px' }}>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Regar lentamente el suelo alrededor de la planta, de la tal forma que el suelo pueda rehidratarse gradualmente en lugar de drenar el agua.</li>
                <li>Deben podarse las partes completamente marchitas, sin podar nunca más de un tercio del total de la planta.</li>
                <li>Cortar los tallos secos progresivamente desde los extremos, hasta llegar a un punto del tallo que todavía este vivo.</li>
              </ul>
            </div>
          </details>

          <details>
            <summary>4.- Cuáles son las medidas de prevención por la falta de agua en las plantas?</summary>
            <div style={{ paddingTop: '15px' }}>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Cuando se obtenga una nueva planta conviene investigar los requerimientos específicos de riego.</li>
                <li>Puede adquirirse un medidor digital de la humedad del suelo que debe ser clavado cerca de las raíces de las plantas.</li>
              </ul>
            </div>
          </details>

          <details>
            <summary>5.- La planta entera se ha tornado negra y se está pudriendo desde el centro?</summary>
            <div style={{ paddingTop: '15px' }}>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '10px' }}>Son síntomas de podredumbre blanca, enfermedad causada por un grupo de bacterias que se reproducen y se expanden en zonas húmedas o en grandes grupos de plantas que crecen muy juntas, lo que impide una buena ventilación. Una vez que esta enfermedad aparece, es muy difícil de controlar.</p>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>Para casos leves, en que sólo parte de la planta se ve afectada:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Reducir el riego</li>
                <li>Podar cualquier parte afectada</li>
                <li>Replantar en nuevo suelo</li>
              </ul>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '10px' }}>En casos severos es recomendable desechar la planta.</p>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>Medidas de prevención de esta enfermedad:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Evitar el riego excesivo</li>
                <li>Asegurar una ventilación adecuada entre ejemplares</li>
                <li>No introducir plantas ya afectadas</li>
                <li>Esterilizar las herramientas que se utilizan en la poda</li>
                <li>Mantener las plagas bajo control</li>
              </ul>
            </div>
          </details>

          <details>
            <summary>6.- Porqué la planta se ha secado por completo?</summary>
            <div style={{ paddingTop: '15px' }}>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>Si la planta se ha secado y se ha vuelto marrón y no se observa alguna parte verde en su tallo y hojas, esto se debe a:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Falta de agua</li>
                <li>Un exceso de agua</li>
                <li>En el principio de su hibernación normal</li>
                <li>La exposición a herbicidas y otras sustancias tóxicas</li>
                <li>Un exceso de fertilización</li>
                <li>Una exposición excesiva al sol</li>
              </ul>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>Para determinar si la planta está viva y puede ser salvada, se puede:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Doblar una ramita, si todavía se dobla, está viva</li>
                <li>Rascar suavemente el tallo y observar si la corteza aun está verde</li>
                <li>Podar un poco los extremos de la planta para incentivar el retoño</li>
              </ul>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>La solución para el mantenimiento de la planta, dependiendo de la causa, puede ser:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Ajustar el riego</li>
                <li>Podar el follaje muerto</li>
                <li>Trasladar la planta a un lugar adecuado</li>
                <li>Reducir la aplicación de fertilizantes</li>
                <li>Esperar a que pase el invierno</li>
              </ul>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '5px' }}>Los métodos efectivos de prevención que aseguran que la planta esté en un ambiente apropiado:</p>
              <ul style={{ color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>Proveer un riego apropiado para la especie</li>
                <li>Ubicar las plantas en un entorno apropiado</li>
                <li>Proveer condiciones ideales de fertilidad</li>
                <li>Mantener las plantas alejadas de sustancias tóxicas</li>
              </ul>
            </div>
          </details>

          <details>
            <summary>7.- La forma y el tamaño de las hojas de una misma planta pueden variar al punto de confundirse con otras especies?</summary>
            <div style={{ paddingTop: '15px' }}>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Si, esto puede deberse a diferencias entre las hojas jóvenes y maduras o entre las hojas interiores o superiores, además de entre las hojas con deficiencia en nutrientes y aquellas fertilizadas de modo adecuado.</p>
            </div>
          </details>

        </div>
      </section>


      {/* Contáctanos */}
      <section id="contacto" style={{ background: 'white', padding: '100px 5%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: '#222', fontFamily: 'var(--font-leaner), sans-serif', fontWeight: 'bold', letterSpacing: '-1px' }}>Contáctanos</h2>
            <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
              Si tienes alguna pregunta o quieres solicitar una <strong>cotización gratuita</strong> para tus zonas verdes, contáctanos a través de correo electrónico o llamada telefónica. ¡Estaremos encantados de ayudarte!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#0C5C9E' }}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                <span style={{ fontWeight: '600', color: '#333' }}>314-821-0636 / 315-354-9902</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#0C5C9E' }}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <span style={{ fontWeight: '600', color: '#333' }}>viverosanmiguelsys@gmail.com</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#0C5C9E' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                <span style={{ fontWeight: '600', color: '#333' }}>Fusagasugá: Parcela 9 las brisas de Xochimilco</span>
              </div>

            </div>
          </div>

          <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
            <Image unoptimized src="/contacto.jpeg" width={600} height={400} alt="Contactanos Vivero Sanmiguel" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '12px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--text-dark)', color: 'white', paddingTop: '80px', paddingBottom: '0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '50px' }}>

          <div style={{ flex: '1 1 400px' }}>
            <h3 className="font-bold text-2xl text-white pb-8">Vivero Sanmiguel</h3>
            <p style={{ marginBottom: '30px', color: '#eee', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '400px' }}>
              Transformamos espacios en modernos lugares llenos de energía vital. Te ayudamos a recuperar, remodelar, renovar y diseñar espacios amigables con el ecosistema.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
              <a href="https://www.instagram.com/paisajismosanmiguel?igsh=aWwwZm9tMmd6OXVu" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.facebook.com/people/Vivero-Sanmiguel/100083385250075/?rdid=po9fLJho0TNVRWBJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C4vBXgm6P%2F" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg>
              </a>
              <a href="https://wa.me/573148210636" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.44 3.38 1.28 4.87L2 22l5.34-1.4c1.45.79 3.09 1.21 4.78 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.3c-.23.65-1.33 1.22-1.84 1.3-.49.07-1.14.15-3.32-.75-2.63-1.09-4.32-3.79-4.45-3.96-.13-.17-1.06-1.42-1.06-2.7 0-1.28.66-1.92.89-2.18.23-.25.51-.31.68-.31.17 0 .34 0 .49.01.16.01.37-.06.57.42.21.49.71 1.73.77 1.86.06.13.11.28.02.45-.08.17-.13.28-.25.42-.13.15-.27.32-.38.44-.12.13-.25.27-.11.51.14.23.63 1.03 1.36 1.68.94.84 1.71 1.1 1.95 1.22.23.13.37.11.51-.06.13-.17.57-.66.73-.89.15-.23.31-.19.52-.11.21.08 1.32.63 1.55.74.23.11.38.17.44.27.06.09.06.53-.17 1.18z" /></svg>
              </a>
            </div>

            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '4px', fontSize: '0.9rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              VOLVER ARRIBA
            </a>
          </div>

          <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: '600' }}>Mapa del Sitio</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li><a href="/" style={{ color: '#ccc', textDecoration: 'none' }}>Inicio</a></li>
                <li><a href="/#servicios" style={{ color: '#ccc', textDecoration: 'none' }}>Servicios</a></li>
                <li><a href="/#plantas" style={{ color: '#ccc', textDecoration: 'none' }}>Plantas</a></li>
                <li><a href="/#nosotros" style={{ color: '#ccc', textDecoration: 'none' }}>Nosotros</a></li>
                <li><a href="/#contacto" style={{ color: '#ccc', textDecoration: 'none' }}>Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: '600' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li><Link href="/privacidad" style={{ color: '#ccc', textDecoration: 'none' }}>Política de Privacidad</Link></li>
                <li><Link href="/terminos" style={{ color: '#ccc', textDecoration: 'none' }}>Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div style={{ background: 'var(--primary-green)', padding: '20px 5%', marginTop: '60px', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'white', margin: 0, fontWeight: 'bold' }}>Copyright © {new Date().getFullYear()} Vivero Sanmiguel. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a href={`https://wa.me/573148210636?text=${encodeURIComponent('Hola Vivero Sanmiguel, me gustaría recibir más información sobre sus servicios y plantas.')}`} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <span style={{ color: 'white', padding: '6px 14px', fontSize: '0.9rem', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Escríbenos</span>
        <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', fill: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.44 3.38 1.28 4.87L2 22l5.34-1.4c1.45.79 3.09 1.21 4.78 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.3c-.23.65-1.33 1.22-1.84 1.3-.49.07-1.14.15-3.32-.75-2.63-1.09-4.32-3.79-4.45-3.96-.13-.17-1.06-1.42-1.06-2.7 0-1.28.66-1.92.89-2.18.23-.25.51-.31.68-.31.17 0 .34 0 .49.01.16.01.37-.06.57.42.21.49.71 1.73.77 1.86.06.13.11.28.02.45-.08.17-.13.28-.25.42-.13.15-.27.32-.38.44-.12.13-.25.27-.11.51.14.23.63 1.03 1.36 1.68.94.84 1.71 1.1 1.95 1.22.23.13.37.11.51-.06.13-.17.57-.66.73-.89.15-.23.31-.19.52-.11.21.08 1.32.63 1.55.74.23.11.38.17.44.27.06.09.06.53-.17 1.18z" /></svg>
      </a>
    </>
  );
}
