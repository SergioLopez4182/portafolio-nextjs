export type Project = {
  slug: string;
  title: string;
  description: string;
  context: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'work-permissions-app',
    title: 'Sistema de gestión de permisos de trabajo',
    description: 'Digitalización del proceso de permisos en centro comercial.',
    context: 'Sistema desarrollado para digitalizar y centralizar la gestión de permisos de trabajo dentro de un centro comercial. El proceso previo era manual y por correo electrónico, generando retrasos, falta de trazabilidad y errores operativos. El sistema permite a los locatarios solicitar permisos (ingreso de proveedores, instalación de mobiliario, adecuaciones del local) y a los administradores validar, rechazar y dar seguimiento a dichas solicitudes mediante flujos controlados.',
    stack: ['Next.js', 'React', 'Azure', 'PostgreSQL'],
  },
  {
    slug: 'romberg-test-app',
    title: 'Aplicación de pruebas Romberg',
    description: 'Evaluación de estabilidad mediante visión por computadora.',
    context: 'Sistema desarrollado para estandarizar la evaluación de pruebas Romberg en operadores de una empresa de transporte de personal. El proceso previo era manual y dependía del criterio del personal médico, lo que generaba inconsistencias y falsos positivos. La solución guía al operador durante la evaluación mediante instrucciones visuales y auditivas, valida posturas mediante visión por computadora y determina el resultado con reglas predefinidas.',
    stack: ['Electron', 'React', 'WebSockets'],
  },
    {
    slug: 'access-tickets-app',
    title: 'Sistema para generación de boletas',
    description: 'Registro de entradas y salidas para vehículos de carga',
    context: 'Proyecto orientado a digitalizar el registro de accesos, pesajes y salidas de vehículos de carga en una empresa de venta de material a granel. El proceso incluía múltiples pesajes por vehículo y se realizaba de forma manual en caseta. El sistema integra visión por computadora para identificar vehículos y registrar eventos automáticamente.',
    stack: ['Flutter', 'React', 'Next.js', 'Django', 'MySQL'],
  },
];