import { provide } from "inversify-binding-decorators";

@provide(HTMLBlockManager)
export class HTMLBlockManager {
	private readonly htmlBlocks = new Map();
}
