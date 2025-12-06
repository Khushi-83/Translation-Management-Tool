import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const API = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export default function Translations(){
  const [q, setQ] = useState('');
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ key:'', en:'', others: {} });

  async function fetchList() {
    const res = await fetch(`${API}/translations?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setItems(data);
  }

  useEffect(()=>{ fetchList(); }, []); // initial

  async function create(){
    await fetch(`${API}/translations`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form)
    });
    setForm({ key:'', en:'', others: {} });
    fetchList();
  }

  return (
    <div className="grid gap-6">
      <div className="flex gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 px-4 py-3 rounded-lg border" placeholder="Search keys or English value..." />
        <button onClick={fetchList} className="px-4 py-3 rounded-lg border">Search</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold mb-3">Add translation</h3>
          <input className="w-full mb-2 px-3 py-2 border rounded" placeholder="key" value={form.key} onChange={e=>setForm({...form, key: e.target.value})} />
          <input className="w-full mb-2 px-3 py-2 border rounded" placeholder="English value" value={form.en} onChange={e=>setForm({...form, en: e.target.value})} />
          <textarea className="w-full mb-2 px-3 py-2 border rounded" placeholder='others as JSON e.g. {"hi":"नमस्ते"}' value={JSON.stringify(form.others)} onChange={e=>{
            try {
              setForm({...form, others: JSON.parse(e.target.value)});
            } catch { /* ignore JSON errors while typing */ }
          }} rows={4}/>
          <div className="flex gap-2">
            <button onClick={create} className="px-4 py-2 bg-primary text-white rounded">Save</button>
            <button onClick={()=>{setForm({ key:'', en:'', others:{} })}} className="px-4 py-2 border rounded">Reset</button>
          </div>
        </Card>

        <div className="space-y-4">
          {items.map(item => (
            <Card key={item._id}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{item.key}</div>
                  <div className="text-gray-600">{item.en}</div>
                </div>
                <div className="text-sm text-gray-400">{new Date(item.createdAt).toLocaleDateString()}</div>
              </div>
              <pre className="mt-3 text-xs bg-gray-50 rounded p-3 overflow-x-auto">{JSON.stringify(item.others, null, 2)}</pre>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
