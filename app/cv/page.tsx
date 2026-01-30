import { Alert } from "@mantine/core";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

export default function Projects() {
    return (
        <Alert
            variant="filled"
            color="yellow"
            title="Trabajo en proceso"
            radius="md"
            icon={<IconAlertTriangleFilled />}
        >
            La pagina actual se encuentra en proceso de desarrollo, vuelva más tarde para conocer más.
        </Alert>
    );
}
