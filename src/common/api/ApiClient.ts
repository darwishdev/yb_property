import { createConnectTransport } from "@bufbuild/connect-web";
import { createPromiseClient } from "@connectrpc/connect";
import type { PromiseClient, Transport } from "@connectrpc/connect";
import { AbcService } from "@buf/ahmeddarwish_abc-api.connectrpc_es/abc/v1/abc_service_connect"
const transport = createConnectTransport({
	baseUrl: import.meta.env.VITE_API_URL,
	useHttpGet: true
});

const apiClient: PromiseClient<typeof AbcService> = createPromiseClient(AbcService, transport as Transport);

export default apiClient

