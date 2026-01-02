// types/index.ts
export interface SubSector {
  name: string;
  focus: string;
}

export interface BusinessArm {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  sectors: SubSector[];
}