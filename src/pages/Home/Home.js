import React from "react";

// button styles:
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

//components of content:

const Home = () => {
  return (
    <div>
      <div> לומדים מתמטיקה</div>
      <Button type="link" icon={<SearchOutlined />}>
        פונקציות
      </Button>
      <Button type="link" icon={<SearchOutlined />}>
        טריגונומטריה
      </Button>
      <Button type="link" icon={<SearchOutlined />}>
        אלג'ברה
      </Button>
      <Button type="link" icon={<SearchOutlined />}>
        סטטיסטיקה
      </Button>
    </div>
  );
};

export default Home;
