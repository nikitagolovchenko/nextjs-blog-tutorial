import useSWR from 'swr';

// useSWR - хук для загрузки данных на стороне клиента. Если мы загружаем данные на клиенте, а не черзе server pre-render

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
