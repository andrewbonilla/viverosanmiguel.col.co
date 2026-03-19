import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { slug: "venta-de-material-ornamental" },
    { slug: "paisajismo" },
    { slug: "cerramientos-en-cerca-viva" },
    { slug: "asesoria-personalizada" },
    { slug: "jardineria" },
    { slug: "instalacion-de-cesped" }
  ];
}

const serviciosData = {
  "venta-de-material-ornamental": {
    title: "Venta de material ornamental",
    desc: "Variedad de piedras decorativas, tierra con sustrato, cascarilla, humus de lombriz, abonos, insecticidas y en general el material acorde a la jardinería.",
    img: "/servicios/venta-de-material-ornamental/servicio_ornamental1.jpg",
    gallery: [
      "/servicios/venta-de-material-ornamental/servicio_ornamental1.jpg",
      "/servicios/venta-de-material-ornamental/servicio_ornamental2.jpg",
      "/servicios/venta-de-material-ornamental/servicio_ornamental3.jpg"
    ]
  },
  "paisajismo": {
    title: "Paisajismo",
    desc: "Nuestra técnica combina la aplicación del arte, la ciencia y el diseño en la creación de entornos naturales. Realizamos cambios en espacios exteriores utilizando las plantas y recursos naturales adecuados para mejorar sus características físicas y estéticas.",
    img: "/servicios/paisajismo/servicio_paisajismo1.jpg",
    gallery: [
      "/servicios/paisajismo/servicio_paisajismo1.jpg",
      "/servicios/paisajismo/servicio_paisajismo2.jpg",
      "/servicios/paisajismo/servicio_paisajismo3.jpg",
      "/servicios/paisajismo/servicio_paisajismo4.jpg"
    ]
  },
  "cerramientos-en-cerca-viva": {
    title: "Cerramientos en cerca viva",
    desc: "Sembrado y acondicionamiento (una o varias especies) lineal de arbustos para delimitación de propiedades o espacios.",
    img: "/servicios/cerramientos-en-cerca-viva/servicio_cerramientos_en_cerca_viva1.png",
    gallery: [
      "/servicios/cerramientos-en-cerca-viva/servicio_cerramientos_en_cerca_viva1.png",
      "/servicios/cerramientos-en-cerca-viva/servicio_cerramientos_en_cerca_viva2.png",
      "/servicios/cerramientos-en-cerca-viva/servicio_cerramientos_en_cerca_viva3.jpg"
    ]
  },
  "asesoria-personalizada": {
    title: "Asesoría personalizada",
    desc: "Te ayudamos a crear el espacio que siempre has soñado. Acompañamiento en el proceso de selección de plantas y diseño, para que los espacios intervenidos reflejen los gustos y sentimientos del cliente final.",
    img: "/servicios/asesoria-personalizada/servicio_asesoria_personalizada1.jpg",
    gallery: [
      "/servicios/asesoria-personalizada/servicio_asesoria_personalizada1.jpg"
    ]
  },
  "jardineria": {
    title: "Jardinería",
    desc: "Sembramos plantas ornamentales en áreas abiertas o cerradas, seleccionadas por la belleza de sus flores u hojas, con fines decorativos y de valorización.",
    img: "/servicios/jardineria/servicio_jardineria1.jpg",
    gallery: [
      "/servicios/jardineria/servicio_jardineria1.jpg",
      "/servicios/jardineria/servicio_jardineria2.jpg",
      "/servicios/jardineria/servicio_jardineria3.jpg"
    ]
  },
  "instalacion-de-cesped": {
    title: "Instalación de césped",
    desc: "Ofrecemos instalación profesional de césped para jardines, terrazas y zonas verdes. Aseguramos el mejor terreno para que su prado crezca fuerte y con un verde vibrante.",
    img: "/servicios/instalacion-de-cesped/servicio_instalacion_cespeced1.jpg",
    gallery: [
      "/servicios/instalacion-de-cesped/servicio_instalacion_cespeced1.jpg",
      "/servicios/instalacion-de-cesped/servicio_instalacion_cespeced2.jpg",
      "/servicios/instalacion-de-cesped/servicio_instalacion_cespeced3.jpg"
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviciosData[slug as keyof typeof serviciosData];

  if (!service) return {};

  return {
    title: `${service.title} | Vivero Sanmiguel`,
    description: service.desc,
    openGraph: {
      title: `${service.title} | Vivero Sanmiguel`,
      description: service.desc,
      images: [
        {
          url: service.img,
          width: 1200,
          height: 630,
        }
      ]
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = serviciosData[slug as keyof typeof serviciosData];

  if (!service) return notFound();

  return (
    <>
      {/* Shared Header (Minimal for sub-page to allow returning) */}
      <div className="top-bar">
        <div className="top-bar-item">
          <svg className="top-bar-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
          viverosanmiguelsys@gmail.com
        </div>
        <div className="top-bar-item">
          <svg className="top-bar-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
          Oficina en Bogotá: Calle 106 N° 45 A 85 Bogotá
        </div>
      </div>

      <header>
        <div className="logo-container">
          <Link href="/"><Image unoptimized src="/vivero_logo.png" alt="Vivero Sanmiguel Logo" width={180} height={80} className="logo-img" /></Link>
        </div>
        <nav className="nav-links">
          <Link href="/" className="nav-item">Inicio</Link>
          <Link href="/#servicios" className="nav-item active">Servicios</Link>
          <Link href="/#plantas" className="nav-item">Plantas</Link>
          <Link href="/#nosotros" className="nav-item">Nosotros</Link>
          <Link href="/#contacto" className="nav-item">Contacto</Link>
          <a href="/#contacto" className="btn-green" style={{ padding: '8px 20px' }}>Contáctanos</a>
        </nav>
      </header>

      {/* Hero Service Details */}
      <section style={{ padding: '0', position: 'relative', height: '50vh', overflow: 'hidden' }}>
        <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '5%', zIndex: 2, color: 'white' }}>
          <Link href="/#servicios" style={{ color: 'var(--primary-green)', background: 'white', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>← Volver a Servicios</Link>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', textShadow: '0 4px 10px rgba(0,0,0,0.5)', fontFamily: 'var(--font-leaner), sans-serif' }}>{service.title}</h1>
        </div>
      </section>

      {/* Service Info */}
      <section className="bg-sand" style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', fontSize: '1.25rem', lineHeight: '1.8', color: '#444' }}>
          <p>{service.desc}</p>
        </div>
      </section>

      {/* Mini Gallery */}
      <section style={{ padding: '80px 5%', background: 'white' }}>
        <h2 className="section-title">Galería del Servicio</h2>
        <p className="section-subtitle">Algunos ejemplos de {service.title.toLowerCase()}</p>

        <div className="cards-grid" style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '40px' }}>
          {service.gallery.map((galleryImg, index) => (
            <div key={index} style={{ borderRadius: '16px', overflow: 'hidden', height: '320px', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              <Image src={galleryImg} fill style={{ objectFit: 'cover' }} alt={`Muestra ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section style={{ padding: '100px 5%', background: 'var(--primary-green)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '25px', fontFamily: 'var(--font-leaner), sans-serif' }}>¿Listo para empezar tu jardín?</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '45px', opacity: 0.9 }}>Transformaremos tu espacio con el mejor servicio integral y plantas hermosas.</p>
        <a href={`https://wa.me/573148210636?text=${encodeURIComponent('Hola! Me interesa cotizar el servicio de ' + service.title)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'white', color: 'var(--text-dark)', padding: '16px 45px', borderRadius: '50px', fontSize: '1.15rem', fontWeight: '800', textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', transition: 'transform 0.3s' }} className="hover:scale-105">Cotizar Ahora 🌿</a>
      </section>

      {/* Shared Footer */}
      <footer style={{ background: 'var(--text-dark)', color: 'white', paddingTop: '80px', paddingBottom: '0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '50px' }}>

          <div style={{ flex: '1 1 400px' }}>
            <p style={{ marginBottom: '30px', color: '#eee', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '400px' }}>
              Transformamos espacios en modernos lugares llenos de energía vital. Te ayudamos a recuperar, remodelar, renovar y diseñar espacios amigables con el ecosistema.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
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
    </>
  )
}
