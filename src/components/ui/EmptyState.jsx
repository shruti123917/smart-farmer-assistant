function EmptyState({ title, description }) {
  return (
    <div className="card-base rounded-2xl border-dashed p-8 text-center">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{description}</p>
    </div>
  );
}

export default EmptyState;
