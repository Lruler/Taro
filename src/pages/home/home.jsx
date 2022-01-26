import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    Taro.request({
      url: "http://localhost:8000/blog/list?page=3",
      success: (res) => {
        console.log(res.data);
        setBlog(res.data.rows);
      },
    });
  }, []);

  return (
    <View>
      我是首页
      <View>
        {blog.map((b) => (
          <View key={b.id}>{b.createdAt}</View>
        ))}
      </View>
    </View>
  );
};

export default Home;
