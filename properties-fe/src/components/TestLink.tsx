import { FC, MouseEventHandler } from 'react';

type Props = {
  method: string;
  clickFn: MouseEventHandler;
  btnMsg: string;
  url: string;
};

export const TestLink: FC<Props> = ({ method, clickFn, btnMsg, url }) => {
  return (
    <div>
      <p>
        <button onClick={clickFn}>{btnMsg}</button>
        <strong>
          {method}--<i>{url}</i>
        </strong>
      </p>
    </div>
  );
};
