import { useState } from "react";
import { changePassword } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: "Zayıf şifre", description: "En az 6 karakter olmalı." });
      return;
    }
    if (password !== password2) {
      toast({ title: "Şifreler uyuşmuyor" });
      return;
    }
    setLoading(true);
    try {
      await changePassword(password);
      toast({ title: "Şifre güncellendi" });
      setPassword("");
      setPassword2("");
    } catch (err: any) {
      toast({ title: "Hata", description: err.message, className: "bg-red-50 border-red-200 text-red-800" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Şifre Değiştir</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Yeni Şifre</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <Label>Yeni Şifre (Tekrar)</Label>
              <Input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Kaydediliyor..." : "Güncelle"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}





