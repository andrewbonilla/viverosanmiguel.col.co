import Link from 'next/link';

export default function Terminos() {
  return (
    <div style={{ background: '#F9F5F0', minHeight: '100vh', padding: '60px 5%', color: '#333' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '60px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <Link href="/" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
          ← Volver al inicio
        </Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-leaner), sans-serif' }}>Términos de Servicio</h1>
        
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Última actualización: {new Date().toLocaleDateString('es-CO')}
        </p>

        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Bienvenido al sitio web de Vivero Sanmiguel. Al acceder y utilizar nuestro sitio web o servicios, usted acepta estar sujeto a los siguientes términos y condiciones.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>1. Servicios Explicados</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Vivero Sanmiguel provee servicios de diseño emocional, jardinería integral, paisajismo, venta de material ornamental y mantenimientos. Toda asesoría, presupuesto o cotización se brinda para la conceptualización de los espacios según requiera el cliente, sujetas a la disponibilidad y variaciones del alcance real.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>2. Propiedad Intelectual</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Todo el contenido de este sitio web, incluyendo textos, gráficos, diseños, estructura y logotipos son propiedad de Vivero Sanmiguel y están protegidos por las leyes de propiedad intelectual.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>3. Limitación de Responsabilidad</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Vivero Sanmiguel no se hace responsable por daños directos o indirectos que resulten del uso de este sitio web. Los consejos mostrados de carácter general sobre cuidado de plantas son únicamente recomendaciones y el rendimiento de las plantas puede variar según el entorno particular de cada cliente.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>4. Cambios a los Términos</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Al continuar accediendo o utilizando nuestros servicios después de que estas revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', fontFamily: 'var(--font-leaner), sans-serif' }}>5. Contacto</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Para cualquier duda sobre estos Términos, comuníquese a través de nuestro correo: viverosanmiguelsys@gmail.com.
        </p>
      </div>
    </div>
  );
}
