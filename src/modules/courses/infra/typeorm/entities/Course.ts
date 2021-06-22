import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("courses")
class Course {

  @PrimaryGeneratedColumn('increment')
  id_curso: number;

  @Column('varchar')
  descricao: string;                          
  
  @Column('varchar')
  ordem_relatorio: string; 
  
  @Column('varchar')
  tipo_curso: string; 
  
  @Column('varchar')
  id_tipo_curso: string; 
  
  @Column('varchar')
  grupofiltro: string; 
  
  @Column('varchar')
  valor_curso: string; 
  
  @Column('varchar')
  valor_curso_unidade_02: string; 
  
  @Column('varchar')
  ordem_aprendizado: string; 
  
  @Column('varchar')
  qtdeparcelas: string; 
  
  @Column('varchar')
  nivelcertificado: string; 
  
  @Column('varchar')
  reprovapornota: string; 
  
  @Column('varchar')
  reprovaporfalta: string; 
  
  @Column('varchar')
  lancanotaoral: string; 
  
  @Column('varchar')
  lancanotaescrita: string; 
  
  @Column('varchar')
  paginamapa: string; 
  
  @Column('varchar')
  id_condicao_pagamento: string; 
  
  @Column('varchar')
  dataalt: string; 
  
  @Column('varchar')
  horaalt: string;         
  
  @Column('varchar')
  datainc: string;          
  
  @Column('varchar')
  horainc: string;          
  
  @Column('varchar')
  usuarioalt: string;    
  
  @Column('varchar')
  usuarioinc: string;   
  
  @Column('varchar')
  cursosemestral: string; 
  
  @Column('varchar')
  contrato_web_mostra: string; 
  
  @Column('varchar')
  contrato_web_numero_niveis: string; 
  
  @Column('varchar')
  contrato_web_duracao: string;                                                                   
  
  @Column('varchar')
  contrato_web_ordem_lista: string; 
  
  @Column('varchar')
  id_rubrica_folha: string; 
  
  @Column('varchar')
  ativo: string; 


}

export default Course;