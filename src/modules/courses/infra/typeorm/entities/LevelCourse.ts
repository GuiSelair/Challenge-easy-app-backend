import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Course from './Course';

@Entity("courses_levels")
class LevelCourse {

  @PrimaryColumn()
  id_nivel: number;

  @ManyToOne(() => Course, course => course.id_curso)
  @JoinColumn({ name: 'id_curso' })
  course: Course;

  @Column()
  id_curso: number;

  @Column('varchar')
  descricao: string;                          
  
  @Column('varchar')
  permite_matricula_automatica: string; 
  
  @Column('varchar')
  iniciante: string; 
  
  @Column('varchar')
  label_color: string; 
  
  @Column('varchar')
  valor: string; 
  
  @Column('varchar')
  status: string; 
  
  @Column('varchar')
  nivel: string; 
  
  @Column('varchar')
  livro: string;                                                                                                                     
  
  @Column('varchar')
  livro_edicao: string;    
  
  @Column('varchar')
  livro_editora: string;           
  
  @Column('varchar')
  proximo_nivel: string; 
  
  @Column('varchar')
  idade_inicial: string; 
  
  @Column('varchar')
  idade_final: string; 
  
  @Column('varchar')
  idade_indicativa: string; 
  
  @Column('varchar')
  ordem: string;     
  
  @Column('varchar')
  data_nascimento_inicial: string; 
  
  @Column('varchar')
  data_nascimento_final: string; 
  
  @Column('varchar')
  id_label_notas: string; 
  
  @Column('varchar')
  nivel_equivalente: string; 
  
  @Column('varchar')
  cargahoraria: string; 
  
  @Column('varchar')
  geracertificado: string; 
  
  @Column('varchar')
  nivel_equivalente2: string; 
  
  @Column('varchar')
  nivel_equivalente3: string; 
  
  @Column('varchar')
  nivel_equivalente4: string; 
  
  @Column('varchar')
  ano: string;  
  
  @Column('varchar')
  semestre: string; 
  
  @Column('varchar')
  id_label_notas2: string; 
  
  @Column('varchar')
  range_idade_inicial: string; 
  
  @Column('varchar')
  range_idade_final: string; 
  
  @Column('varchar')
  reprovapornota: string; 
  
  @Column('varchar')
  reprovaporfalta: string; 
  
  @Column('varchar')
  dt_inc: string; 
  
  @Column('varchar')
  dt_alt: string;           
  
  @Column('varchar')
  usuario_inc: string; 
  
  @Column('varchar')
  usuario_alt: string;       
  
  @Column('varchar')
  isbn: string;          
  
  @Column('varchar')
  font_color: string; 
  
  @Column('varchar')
  online_presencial: string; 
}

export default LevelCourse;