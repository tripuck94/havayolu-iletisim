interface ServiceHeaderProps {
  title: string;
  description: string;
}

export const ServiceHeader = ({ title, description }: ServiceHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        {title}
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};