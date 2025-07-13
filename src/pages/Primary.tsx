import MainLayout from "../layout/MainLayout";
import Header from "../components/Header";
import NoteTable from "@/components/Table/NoteTable";

export default function Primary() {
  return (
    <MainLayout>
      <Header />
      <NoteTable />
    </MainLayout>
  );
}
