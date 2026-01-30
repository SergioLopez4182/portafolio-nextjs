"use client";
import { Title, Text, Stack, Divider, List, Card, Group } from "@mantine/core";

export default function About() {
    return (
        <Stack
            align="center"
            justify="center"
            p="lg"
            className="w-[40%]"
        >
            <Title order={1} ta="center">Sobre mi</Title>
            <Text size="xl" c="dimmed">
                Hola, soy Sergio, desarrollador Full Stack apasionado por la tecnología, los videojuegos, la música y el ejercicio. <br />
                He trabajado principalmente en proyectos donde el software impacta procesos reales: operación, seguridad, transporte y digitalización de flujos físicos.
            </Text>

            <Divider />

            <Title order={1} ta="center">Background profesional</Title>

            <Text size="xl" c="dimmed">
                Egresé del Instituto Tecnológico de Saltillo en 2021 como Ingeniero en Sistemas Computacionales.
                Antes de graduarme me uní a Introid Inc. como ingeniero de datos en un proyecto de sistemas distribuidos. Posteriormente continué con el equipo como desarrollador Full Stack, trabajando con frontend, backend, bases de datos e infraestructura.
                Después de más de tres años con Introid, me uní a Tienda Tec, donde trabajé como desarrollador Full Stack dando soporte a plataformas en distintas versiones de .NET y desarrollando soluciones a medida para clientes, participando en levantamiento de requerimientos, desarrollo y despliegue de sistemas.
            </Text>

            <Divider />

            <Title order={1} ta="center">Tecnologías</Title>

            <Group align="flex-start" justify="center" gap="lg">
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        Frontend
                    </Text>
                    <List size="xl" withPadding c="dimmed">
                        <List.Item>React / Next.js</List.Item>
                        <List.Item>Tailwind CSS</List.Item>
                        <List.Item>Zustand</List.Item>
                        <List.Item>Electron </List.Item>
                        <List.Item>Flutter</List.Item>
                    </List>
                </Card>
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        Backend
                    </Text>
                    <List size="xl" withPadding c="dimmed">
                        <List.Item>APIs REST</List.Item>
                        <List.Item>WebSockets</List.Item>
                        <List.Item>Node.js</List.Item>
                        <List.Item>Express.js</List.Item>
                        <List.Item>Django</List.Item>
                        <List.Item>PostgreSQL</List.Item>
                        <List.Item>SQL Server</List.Item>
                        <List.Item>MySQL</List.Item>
                        <List.Item>MongoDB</List.Item>
                    </List>
                </Card>
                <Card p="md" radius="md" withBorder shadow="lg">
                    <Text size="xl" fw={700} ta="center">
                        Infraestructura
                    </Text>
                    <List size="xl" withPadding c="dimmed">
                        <List.Item>AWS (EC2, S3)</List.Item>
                        <List.Item>Azure (CI/CD básico)</List.Item>
                        <List.Item>Git / GitHub</List.Item>
                    </List>
                </Card>
            </Group>




            <Divider />

            <Title order={1} ta="center">Forma de trabajo</Title>
            <Text size="xl" c="dimmed">
                Me gusta comenzar entendiendo a fondo el problema, incluyendo interacción con usuarios finales y levantamiento de requerimientos.
                Prefiero soluciones simples pero robustas, enfocadas en mantenibilidad y escalabilidad.
                Trabajo de forma iterativa, buscando feedback temprano del equipo o cliente, lo que permite detectar riesgos y oportunidades rápidamente.
                Valoro el uso de buenas prácticas, estándares y herramientas que faciliten el trabajo colaborativo.
            </Text>

            <Divider />

            <Title order={1} ta="center">Intereses profesionales</Title>

            <Text size="xl" c="dimmed">
                Estoy interesado en seguir profundizando en:
            </Text>

            <List size="xl" withPadding c="dimmed">
                <List.Item>Frontend avanzado</List.Item>
                <List.Item>Testing y automatización</List.Item>
                <List.Item>Backend avanzado</List.Item>
                <List.Item>Administración y diseño de bases de datos</List.Item>
                <List.Item>DevOps y despliegue de sistemas</List.Item>
            </List>
        </Stack>
    );
}
