interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Researcher'],
  customerRoles: ['Vendor'],
  tenantRoles: ['Builder', 'Fielder', 'Researcher', 'Data Processor'],
  tenantName: 'Organization',
  applicationName: 'Srvy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Receive a survey from a Fielder.',
    'Complete a survey by answering all its questions.',
    'Submit a completed survey.',
  ],
  ownerAbilities: [
    'Register Organization in the application',
    'Invite Builders, Fielders, and Data Processors to join the Organization',
    'View and analyze cleaned and prepared survey data',
    'Perform basic analysis on collected data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/52be0f16-833e-443d-bd84-6c4c4f280a6d',
};
