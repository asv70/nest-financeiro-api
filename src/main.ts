import 'module-alias/register';
import * as dotenv from 'dotenv';
dotenv.config();

import { ServerApplication } from '@application/server-application';

(async (): Promise<void> => {
  await launchServer();
})();

async function launchServer(): Promise<void> {
  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();
}
