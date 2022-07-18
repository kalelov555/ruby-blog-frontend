import { Button, Result } from "antd";
import Link from "next/link";
import React from "react";

const App: React.FC = () => (
  <Result
    status='404'
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={
      <Button type='primary'>
        <Link href='/'>Back Home</Link>
      </Button>
    }
  />
);

export default App;
