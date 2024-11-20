import { Acercade } from '../../common/Acercade/Acercade';
import './Home.css';

export function Home() {
    return (
        <>
            <div className="banner text-white">
                <p>
                    Administra tus finanzas con precisión y claridad desde una sola aplicación. Controla ingresos, gastos y patrones de consumo, visualiza reportes detallados, y establece objetivos financieros con recordatorios personalizados. Una solución completa y segura para alcanzar tus metas económicas.

                    Control Total de tus Finanzas

                    Administra tus ingresos y gastos con precisión en una interfaz intuitiva y fácil de usar.
                    Clasifica y categoriza cada transacción para obtener una visión clara de tus patrones de consumo.
                    Análisis Detallado y Reportes

                    Visualiza gráficos y reportes que reflejan tus hábitos financieros y descubre áreas de mejora.
                    Define objetivos financieros y realiza un seguimiento constante para asegurar tu progreso.
                    Alertas y Recordatorios Inteligentes

                    Recibe notificaciones personalizadas que te ayudan a mantenerte dentro de tu presupuesto.
                    Establece recordatorios para pagos y eventos financieros clave, minimizando el riesgo de gastos innecesarios.
                    Soporte Multi-cuenta y Seguridad de Datos

                    Gestiona múltiples cuentas y métodos de pago desde una sola plataforma centralizada.
                    Disfruta de sincronización automática y respaldo en la nube para asegurar la integridad de tus datos.
                    Planifica tu Futuro Financiero

                    Transforma tu relación con el dinero y toma decisiones informadas para alcanzar tus metas.
                </p>
                
                <button className='btn btn-outline-success'>Ver más</button>
            </div>
            <Acercade />
        </>
    );
}
