import { factory } from '@gooddata/gooddata-js';

const sdk = factory();
const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

window.gooddata = sdk; // only for dev purposes

export default {
  projectId,
  sdk
};
