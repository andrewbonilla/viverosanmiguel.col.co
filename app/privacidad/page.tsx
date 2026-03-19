import Link from 'next/link';

export default function Privacidad() {
  return (
    <div style={{ background: '#F9F5F0', minHeight: '100vh', padding: '60px 5%', color: '#333' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '60px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <Link href="/" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
          ← Volver al inicio
        </Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-leaner), sans-serif' }}>Política de Privacidad</h1>
        
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Última actualización: {new Date().toLocaleDateString('es-CO')}
        </p>

        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          En Vivero Sanmiguel, respetamos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos la información cuando usted visita nuestro sitio web.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>1. Información que Recopilamos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Solo recopilamos información personal que usted nos proporciona voluntariamente al contactarnos mediante nuestros formularios, WhatsApp, correo electrónico o canales oficiales. Esto puede incluir su nombre, número de teléfono y dirección al solicitar una cotización.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>2. Uso de la Información</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          La información recopilada se utiliza exclusivamente para:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Responder a sus solicitudes, preguntas y proveer cotizaciones.</li>
          <li>Comunicarnos con usted para coordinar servicios de jardinería, paisajismo y mantenimiento.</li>
          <li>Mejorar la atención al cliente.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>3. Protección de Datos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Implementamos medidas de seguridad para proteger sus datos personales contra acceso no autorizado. No vendemos, intercambiamos ni transferimos su información personal a terceros bajo ninguna circunstancia sin su consentimiento explícito.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>4. Contacto</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos en:
          <br /><strong>Email:</strong> viverosanmiguelsys@gmail.com
          <br /><strong>Teléfono:</strong> 314-821-0636 / 315-354-9902
        </p>
      </div>
    </div>
  );
}
