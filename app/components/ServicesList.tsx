"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type ServiceType = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

export default function ServicesList({ services }: { services: ServiceType[] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="servicios" style={{ background: '#F9F5F0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
          Servicios
        </h2>
      </div>

      <div className="cards-grid">
        {visibleServices.map((service) => (
          <Link key={service.slug} href={`/servicios/${service.slug}`} className="service-card">
            <div className="service-card-inner">
              <Image src={service.img} alt={service.title} width={400} height={220} className="service-card-image" />
              <div className="service-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc.substring(0, 110)}...</p>
                <div className="service-btn-container">
                  <span>Saber Más</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {services.length > 6 && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{ fontWeight: '700', color: 'var(--text-dark)', background: 'transparent', border: 'none', cursor: 'pointer', borderBottom: '2px solid var(--primary-green)', paddingBottom: '5px', fontSize: '1.1rem' }}
          >
            {showAll ? 'Mostrar menos' : 'Ver todos los servicios'}
          </button>
        </div>
      )}
    </section>
  );
}
