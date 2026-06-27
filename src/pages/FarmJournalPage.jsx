import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { journalEntries } from "../data/mockData";

function FarmJournalPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-ink dark:text-white">Farm Journal</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Track daily field activities, notes, and photos.</p>
        </div>
        <div className="flex gap-3">
          <Button>Add Journal Entry</Button>
          <Button variant="secondary">Calendar View</Button>
        </div>
      </div>

      <Card className="space-y-6">
        {journalEntries.map((entry, index) => (
          <div key={entry.id} className="relative pl-10">
            {index !== journalEntries.length - 1 ? (
              <span className="absolute left-3 top-10 h-full w-px bg-slate-200 dark:bg-slate-700" />
            ) : null}
            <span className="absolute left-0 top-2 h-6 w-6 rounded-full bg-primary/15 ring-4 ring-primary/10" />
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-primary">{entry.date}</p>
                  <h3 className="mt-1 text-xl font-semibold text-ink dark:text-white">{entry.title}</h3>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-500 shadow-soft dark:bg-slate-900 dark:text-slate-300">
                  {entry.mediaCount} images
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.notes}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default FarmJournalPage;
