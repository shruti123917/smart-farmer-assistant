import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { schemes } from "../data/mockData";

function GovernmentSchemesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => schemes.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-4 shadow-soft dark:bg-slate-900">
        <label className="flex items-center gap-3">
          <FiSearch className="text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent py-2 text-sm outline-none"
            placeholder="Search schemes"
          />
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((scheme) => (
          <Card key={scheme.id} className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Eligibility Card</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink dark:text-white">{scheme.title}</h3>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Eligibility</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{scheme.eligibility}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Scheme Details</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{scheme.benefit}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Required Documents</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {scheme.documents.map((doc) => (
                  <span key={doc} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{doc}</span>
                ))}
              </div>
            </div>
            <Button>Apply</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default GovernmentSchemesPage;
