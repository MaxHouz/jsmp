import { Common } from '../common/common.js';

export const VISITOR_TITLE = 'This is visitor page';

export function visitorFunction() {
  const commonAdmin = new Common('title_visitor');

  commonAdmin.populateTitle();
}
