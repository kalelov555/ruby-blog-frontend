import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "components/Navbar";

export type Article = {
  title: string;
  description: string;
  slug: string;
  visible: boolean;
  created_at: string;
  images: [string];
};

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Home: NextPage = () => {
  const [articles, setArticles] = useState([]);

  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count <= 1) {
      axios
        .get(`http://localhost:3000/articles/`)
        .then((val) => setArticles(val.data.data));
      setCount(count + 1);
    }
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("http://localhost:3000/articles", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((val) => setArticles(val.data.data));
    }, 30000);

    return () => clearInterval(intervalId); //This is important
  }, [setArticles, articles]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Articles</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={articles}
        renderItem={({ attributes }: { attributes: Article }) => (
          <List.Item
            key={attributes.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text='156'
                key='list-vertical-star-o'
              />,
              <IconText
                icon={LikeOutlined}
                text='156'
                key='list-vertical-like-o'
              />,
              <IconText
                icon={MessageOutlined}
                text='2'
                key='list-vertical-message'
              />,
            ]}
            extra={<img src={attributes.images[0]} width={250} alt='' />}
          >
            <List.Item.Meta
              title={
                <Link href={`/articles/${attributes.slug}`}>
                  {attributes.title}
                </Link>
              }
              description={attributes.created_at}
            />
            {attributes.description}
          </List.Item>
        )}
      />

      <footer className={styles.footer}>Sagynzhan Kalel</footer>
    </div>
  );
};

export default Home;
