import { supabase } from '../../lib/supabaseClient'

export default async function TestPage() {
  const { data, error } = await supabase.from('schemes').select('*').limit(5)

  return (
    <div style={{ padding: 24 }}>
      <h1>Supabase test</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}