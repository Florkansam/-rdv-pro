export default function ProblemSection() {
  const problems = [
    {
      icon: '💰',
      title: 'Perte de revenus',
      description: 'Clients qui ne se présentent pas = factures impayées',
    },
    {
      icon: '📱',
      title: 'Chaos Instagram DM',
      description: 'Gestion désorganisée des demandes de rendez-vous',
    },
    {
      icon: '😡',
      title: 'Stress et fatigue',
      description: 'Rappels manuels et annulations mal gérées',
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Tu reconnais ça?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
