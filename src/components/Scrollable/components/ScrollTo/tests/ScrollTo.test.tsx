import * as React from 'react';
import {mountWithAppProvider} from '../../../../../../tests/utilities';

import ScrollTo from '..';

describe('<Scrollable.ScrollTo />', () => {
  it('calls scrollToPostion on mount', () => {
    const spy = jest.fn();
    const mockContext = {
      scrollToPosition: spy,
    };

    mountWithAppProvider(<ScrollTo />, {
      context: mockContext,
    });

    expect(spy).toHaveBeenCalled();
  });
});
